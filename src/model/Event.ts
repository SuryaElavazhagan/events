import { EventJSON } from "../typings";

export class Event {
  public name: string;
  public poster: string;
  public linkName: string;
  public views: string;
  public date: Date;

  constructor({ name, poster, linkName, views, date }: EventJSON) {
    this.name = name;
    this.poster = poster;
    this.linkName = linkName;
    this.views = views;
    this.date = new Date(date);
  }

  async rename(newName: string) {
    this.name = newName;
    return Promise.resolve();
  }

  async delete() {
    return Promise.resolve();
  }
}