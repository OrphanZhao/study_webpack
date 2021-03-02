import img from "../public/images/demo.png";

export default function bar() {
  const pic = new Image();
  pic.src = img;
  document.body.append(pic);

  console.log("insert picture");
}
