import { ReusedStatus } from "../util/constant";

export default class Rocket {
  constructor(
    id: string,
    name: string,
    type: string,
    isReused?: boolean,
    ) {
      this.id = id;
      this.name = name;
      this.type = type;
      if (isReused !== undefined) this.isReused = isReused;
  }

  private id: string;

  private name: string;

  private type: string;

  private isReused?: boolean;

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getType(): string {
    return this.type;
  }

  public getIsReused(): string {
    if (this.isReused !== undefined) {
      if (this.isReused) return ReusedStatus.yes;
      return ReusedStatus.no;
    }

    return ReusedStatus.na;
  }
};
