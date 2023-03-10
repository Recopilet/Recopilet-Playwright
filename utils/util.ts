// eslint-disable-next-line @typescript-eslint/no-magic-numbers

export const random = (): number => Math.floor(100000 + Math.random() * 900000)

export const randomString = Math.random()
  .toString(36)
  .replace(/[^a-z]+/g, "")
  .substr(0, 5)

export const delay = async (t: number): Promise<undefined> =>
  new Promise((resolve) => setTimeout(resolve, t))

var date = Date.now()
export const currentTime = date.toString()

const plan = ["Individual Plan", "Extended Family Plan"]

export const randomPlan = plan[Math.floor(Math.random() * plan.length)]

export const option = Math.round(Math.random() * 3) + 1
