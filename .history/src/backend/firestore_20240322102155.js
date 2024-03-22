const createTodoNote = (
  title,
  description,
  deadline,
  team,
  type,
  subProblem
) => {
  const data = {
    title: title,
    description: description,
    deadline: deadline,
    team: team.length,
    type: type,
    subProblem: subProblem,
  };
};
