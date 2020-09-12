import bugModel from "../models/bugModel";

export function retrieveBugs() {
  let data = [];

  data.push(
    new bugModel({
      _id: 654654615154,
      name: "Crash on load",
      details: "crashes after 3 seconds",
      steps: "open application and it will crash",
      version: "v2.0",
      assigned: "tyler belmonte",
      creator: "rocky belmonte",
      priority: 1,
      time: "15:21",
    })
  );

  data.push(
    new bugModel({
      _id: 654654615154,
      name: "Wont load",
      details: "crashes after 3 seconds",
      steps: "open application and it will crash",
      version: "v2.0",
      assigned: "tyler belmonte",
      creator: "rocky belmonte",
      priority: 3,
      time: "15:21",
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });
  return sorted;
}
