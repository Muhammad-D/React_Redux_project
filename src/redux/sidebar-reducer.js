let initialState = {
  friends: [
    {
      name: "Horse",
      img:
        "https://images.pexels.com/photos/2401877/pexels-photo-2401877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Squirrel",
      img:
        "https://image.shutterstock.com/image-photo/small-lovely-ground-squirrel-on-260nw-659858677.jpg",
    },
    {
      name: "Corgi",
      img:
        "https://as2.ftcdn.net/jpg/02/33/24/33/500_F_233243331_URKipvaiQJOzmxQiYqabkvWRmY28yL9I.jpg",
    },
  ],
};

const sidebarReducer = (state = initialState) => {
  return state;
};

export default sidebarReducer;
