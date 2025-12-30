interface Student {
  id: number;
  name: string;
}

interface Arbeit {
  name: string;
  job: string;
}

type StudentArbeit = Student & Arbeit;

const worker: StudentArbeit = {
  id: 12,
  name: "name",
  job: "job",
};
