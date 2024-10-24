import moment from "moment/moment";

export const cardsData = [
  {
    title: "Total Logged Behaviors",
    change: 5, // Example change
    amount: 30, // Total behaviors logged
  },
  {
    title: "Learning Milestones Achieved",
    change: 3,
    amount: 12,
  },
  {
    title: "Average Daily Engagement (min)",
    change: 1,
    amount: 45, // Average engagement time
  },
  {
    title: "Pending Observations",
    change: -2,
    amount: 8,
  },
];

export const behaviorData = [
  {
    name: "Positive Reinforcement",
    type: "Behavior",
    items: 15,
    change: 5,
  },
  {
    name: "Task Completion",
    type: "Behavior",
    items: 12,
    change: 3,
  },
  {
    name: "Class Participation",
    type: "Behavior",
    items: 10,
    change: 2,
  },
  {
    name: "Social Interactions",
    type: "Behavior",
    items: 20,
    change: 8,
  },
];

//* Get the value in group number format
export const groupNumber = (number) => {
  return number.toLocaleString("en", {
    useGrouping: true,
  });
};

//* Calendar Events
let eventGuid = 0;
let todayStr = moment().format("YYYY-MM-DD"); // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Behavior Review Meeting',
    start: todayStr + 'T09:00:00',
  },
  {
    id: createEventId(),
    title: 'Learning Assessment',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T10:00:00',
  },
  {
    id: createEventId(),
    title: "Parent-Teacher Conference",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T15:00:00',
  },
  {
    id: createEventId(),
    title: "Weekly Progress Check",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T14:00:00',
  },
  {
    id: createEventId(),
    title: "Behavior Intervention Plan Review",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00',
  },
  {
    id: createEventId(),
    title: "Monthly Behavior Analysis",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T11:00:00',
  },
];

export function createEventId() {
  return String(eventGuid++);
}

// * Tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Review Learning Plans",
          description: "Evaluate current learning strategies.",
        },
        {
          id: 2,
          title: "Behavior Logging",
          description: "Ensure accurate logging of student behaviors.",
        },
      ],
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Analyze Engagement Data",
          description: "Look for trends in student engagement.",
        },
      ],
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Update Behavior Tracking System",
          description: "Implement new features based on feedback.",
        },
      ],
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Training on Behavior Strategies",
          description: "Complete staff training on new strategies.",
        },
      ],
    },
  ],
};
