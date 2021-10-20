{
  //  Enum

  // JS
  const MAX_NUM = 6
  const MAX_STUDENTS_PER_CLASS = 10
  const DAYS_ENUM = Object.freeze({ MON: 0, TUE: 2 })
  const dayOfToday = DAYS_ENUM.MON

  // TS Enum
  enum Days {
    Mon, // 0
    Tue, // 1
    Wed, // 2
    Thur, // 3
    Fri, //4
  }

  //변경가능
  console.log(Days.Mon)
  let day: Days = Days.Tue
  day = Days.Thur
  day = 10

  // type으로 쓰면 리터럴 때문에 타입 안정성이 up 그러므로 enum보다 낫다 ..
  type DaysOfWeek = 'Mon' | 'Tue' | 'Wed'
  let dayOfWeek: DaysOfWeek = 'Mon'
  dayOfWeek = 'deviii'
}
