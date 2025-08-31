const addBtn = document.getElementById("addBtn");
const dis = document.getElementById("taskInput");
const lis = document.getElementById("taskList");

// ab next step
addBtn.addEventListener('click', function () {
  const taskText = dis.value; 
  console.log("hye me click hue hu");

  if (taskText === "") {
    alert('tumharey baap ky nokir nhi hain hum jaldee kro text likhu');
    return; // ❌ tumne yeh nahi likha tha → empty task add na ho, isliye main add kar diya
  }

  // li create 
  const li = document.createElement("li");

  // ❌ tumhari galti: tumne do dafa textContent likha tha, 
  // pehle taskText dala, phir ❌ se overwrite kar diya.
  // Result: task text gayab ho gaya, sirf ❌ bacha tha.
  li.textContent = taskText;

  // del btn create 
  const del = document.createElement("span");
  del.textContent = " ❌"; // ✅ ab ❌ sirf span me hai, task safe hai
  li.appendChild(del);

  // list bna rahy hain
  lis.appendChild(li);

  // input clear karna (✅ extra feature, quality improve)
  dis.value = "";

  // del btn per
  del.addEventListener('click', function () {
    // ❌ tumne likha tha: lis.removeChild('li'); 
    // yahan 'li' string hai, element nahi. Is wajah se error aa raha tha.
    lis.removeChild(li); // ✅ ab sahi, actual element remove hoga
  });
});
