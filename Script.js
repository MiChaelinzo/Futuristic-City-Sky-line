// -----JS CODE-----
// First, we create a new scene
const scene = new Scene();

// Next, we create a text object that will display the current time
const text = new Text();
text.value = "00:00:00";
text.fontSize = 60;
text.position = new Vector3(0, 0, 0);
scene.root.children.add(text);

// We need to update the text object's value every second
const updateTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  text.value = `${hours}:${minutes}:${seconds}`;
};
setInterval(updateTime, 1000);

// Finally, we set the scene to be the active scene
scene.root.children.add(text);
Engine.setCurrentScene(scene;
