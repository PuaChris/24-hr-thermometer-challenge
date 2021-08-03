import Launch from "../entities/launch.entity";
import Rocket from "../entities/rocket.entity";

export default class Controller {
  // Would normally put URLs in a .env file but since this is public I left it here for convenience
  private apiLaunchURL = 'https://api.spacexdata.com/v3/launches';

  private initFetchOptions = (requestBody?: string): RequestInit => {
    const requestHeaders = new Headers();
    requestHeaders.set('Accept', 'application/json');

    // GET or DELETE requests
    return { headers: requestHeaders };
  };

  // Retrieve all launches
  public getLaunchList = async (limit: number): Promise<Launch[]> => {
    console.log('Retrieving launch list...');

    const url = new URL(this.apiLaunchURL);
    url.searchParams.append('limit', limit.toString());

    let launchList: Launch[] = [];

    await fetch(url.toString(), this.initFetchOptions())
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`${res.status}: Could not retrieve launch list.`);
        }
        return res.json();
      })
      .then((data) => {
        for (let i = 0; i < Object.keys(data).length; i++) {
          let launchData = data[i];
          launchList.push(new Launch(
            launchData['flight_number'] as number,
            launchData['mission_id'] as number[],
            launchData['mission_name'] as string,
            launchData['launch_date_utc'] as string,
            launchData['upcoming'] as boolean,
            launchData['launch_success'] as boolean,
            launchData['links']['mission_patch_small'] as string,
          ))
        }
        console.log('Launch list retrieved.');
      })
      .catch((e) => {
        throw new Error(e);
      });

    return launchList;
  }

  // Retrieve rocket details from a specific launch
  public getRocketDetails = async (flightNum: number): Promise<Rocket> => {
    console.log(`Retrieving rocket details from flight number: '${flightNum}'...`);

    const url = new URL(this.apiLaunchURL);
    url.searchParams.append('flight_number', flightNum.toString());

    const rocketDetails: Rocket = await fetch(url.toString(), this.initFetchOptions())
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`${res.status}: Could not retrieve rocket details.`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data[0]) {

          // Question: What qualifies as a rocket being 'reused' (i.e. is it the first instance of a 'reused' attribute being true?). And what's the difference of being 'Not Applicable' vs. 'Not Reused?' Or does 'Not Applicable' mean the rocket is not reused?

          const rocket = data[0]['rocket'];
          const fairings = rocket['fairings'];
          
          return new Rocket(
            rocket['rocket_id'] as string,
            rocket['rocket_name'] as string,
            rocket['rocket_type'] as string,
            fairings ? fairings['reused'] : undefined,
          )
        }
        throw new Error(`Could not retrieve rocket details due to invalid data.`);
      })
      .catch((e) => {
        throw new Error(e);
      });

    console.log('Rocket details retrieved.');
    return rocketDetails;
  }

}