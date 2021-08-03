import { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RocketDetails from './components/RocketDetails';
import Controller from './controller/controller';
import Launch from './entities/launch.entity';

import './styles/App.css';
import spaceXLogo from './assets/spacex_logo_square.png'
import { LaunchStatus } from './util/constant';

const App = () => {
  const controller = new Controller();
  const [launchList, setlaunchList] = useState<Launch[]>([]);

  // Get launch list
  const initLaunchList = async (limit: number) => {
    const newLaunchList: Launch[] = await controller.getLaunchList(limit);
    setlaunchList(newLaunchList);
  }

  useEffect(() => {
    initLaunchList(120);
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Launch list */}
          <Route exact path="/">
            <ul className="launch-list">
              {launchList?.map((launch) => {
                let launchCSS: string = "launch-status ";
                switch (launch.status) {
                  case LaunchStatus.success:
                    launchCSS += ("success");
                    break;
                  case LaunchStatus.fail:
                    launchCSS += ("fail");
                    break;
                  case LaunchStatus.upcoming:
                    launchCSS += ("upcoming");
                    break;
                }

                return (
                  <li key={launch.getFlightNum()} >
                    <Link to={`/launch/${launch.getFlightNum()}`}>

                      <div className="launch-cell">
                        <img
                          src={launch.getImage() || spaceXLogo}
                          alt={spaceXLogo}
                          className="image"
                          width="56"
                          height="56"
                        />

                        <div className="launch-details">
                          <p className="mission-name">{launch.getMission()}</p>
                          <p className="launch-date">{launch.getLaunchDate()}</p>
                        </div>
                        <div className={launchCSS}>
                          {launch.status}
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Route>

          <Route exact path="/launch/">
            Error: 404 page not found
          </Route>
          {/* Rocket Details */}
          <Route path="/launch/:flightNum" component={RocketDetails} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
