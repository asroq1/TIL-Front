{
  // Intersection tpye : &

  type Student = {
    name: string
    score: string
  }

  type Worker = {
    employeeId: number
    work: () => void
  }
  function internWorker(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work())
  }
}
