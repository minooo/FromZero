import join from "lodash/join";
import "./style.css";
import "./font.css"
import Girl from "./girl.png"
import printMe from "./print"

function component() {
  var element = document.createElement('div');
  var btn = document.createElement("button")

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = join(['hello', 'webpack'], "123")
  btn.innerHTML = "123dffsdclick me123"
  btn.onclick = printMe
  element.classList.add("hello")

  var myGirl = new Image()
  myGirl.src = Girl
  // element.appendChild(myGirl);

  element.appendChild(btn)
  return element;
}

document.body.appendChild(component());
