interface USER {
  readonly dbid: number;
  email: string;
  userId: number;
  password?: string;
  // startTrail:() => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}
// reopening of the interface
interface USER {
  githubToken: string;
}

interface Admin extends USER {
  role: "admin" | "ta" | "learner";
}
const hitesh: Admin = {
  dbid: 22,
  email: "h@h.com",
  userId: 1,
  githubToken: "asdasd",
  role: "admin",
  startTrail: () => {
    return "start";
  },
  getCoupon: (name: "amit", off: 5) => {
    return 10;
  },
};
