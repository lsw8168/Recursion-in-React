const commentData = [
  {
    id: 1,
    text: "Example",
    children: [
      {
        id: 3,
        text: "Another example",
        children: [
          {
            id: 4,
            text: "Another example",
            children: [
              {
                id: 6,
                text: "Another example",
                children: []
              }
            ]
          },
          {
            id: 5,
            text: "Another example",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    text: "Example 2",
    children: []
  }
];

export default commentData;
