import moment from "moment";
import { LaunchStatus } from "../util/constant";

export default class Launch {
  constructor(
    flightNum: number,
    missionId: number[],
    mission: string,
    launchDate: string,
    isUpcoming: boolean,
    isSuccess: boolean,
    image: string,
  ) {
    this.flightNum = flightNum;
    this.missionId = missionId;
    this.mission = mission;
    this.launchDate = moment.utc(launchDate).format("ddd, DD MMM YYYY HH:mm:ss").toString() + " GMT";
    this.isUpcoming = isUpcoming;
    this.isSuccess = isSuccess;
    this.image = image;

    if (this.isUpcoming) {
      this.status = LaunchStatus.upcoming;
    }
    else {
      if (this.isSuccess) {
        this.status = LaunchStatus.success;
      }
      else {
        this.status = LaunchStatus.fail;
      }
    }
  }

  private flightNum: number;

  private missionId: number[];

  private mission: string;

  private launchDate: string;

  private isUpcoming: boolean;

  private isSuccess: boolean;

  private image: string;

  public status: LaunchStatus;

  public getFlightNum(): number {
    return this.flightNum;
  }

  public getMissionId(): number[] {
    return this.missionId;
  }

  public getMission(): string {
    return this.mission;
  }

  public getLaunchDate(): string {
    return this.launchDate;
  }

  public getImage(): string {
    return this.image;
  }
};