let balance = 0;
let name = `John Doe`;
var askName = ""
askName = prompt(`Please enter your name.`);
// Greet the user by name
      // Search the document for the 'username' element
      let _username = document.getElementById('username');
      // Change the content of the element
      _username.innerHTML = askName;

      // The above can be simplified:
      //    document.getElementById('username').innerHTML = name;
/*      function setUserName(){
      var myName = prompt('Please enter your name.');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello, ' + myName
      }
*/
    //  askName = prompt(`Please enter your name.`);



      var balanceColour = document.getElementById('balance');
// 1. Let them know their starting balance
      // Search the document for the 'balance' element
      // Change the content of the element


var completeTransaction = function() {

  // Store the value from the 'amount' input in a variable (let)
        // Make sure it's a number, not a string!!!  parseInt()
  let _amount = parseInt(document.getElementById('amount').value);

  if (isNaN(_amount)){
      alert("NOOOOOOO")
  }
  else {


  // 1. Update the balance using the transaction value
  balance += _amount;
  //let _history = document.createElement("Li");
  //let textnode = document.createTextNode(balance);
  //_history.appendChild(textnode);
  //document.getElementById('history').appendChild(_history);
  //let _balance = document.getElementById('balance');
  //_balance.innerHTML = balance;


  // 2. Add a record to the history showing the amount deposited
  document.getElementById('history').innerHTML += `<li>You deposited $ ${_amount}</li>`;

  // Update the balance in the document
  document.getElementById('balance').innerHTML = balance;

  // 3. IF the balance is less than 0, make the balance red, else make it black
        // A) change the style.color of the balance
        // B) create a css class and .add() a class to the balance


        if (balance < 0) {
          balanceColour.classList.remove("positive_balance");
          balanceColour.classList.add("negative_balance");
        }
        else {
           balanceColour.classList.add("positive_balance");
        }
      }
};

document.getElementById('process').addEventListener('click',completeTransaction);

// EVENT:
//   1) Which object should it be listening to?     document.getElementById('process')
  //var button = document.getElementById("process")
//   2) What type of event are we waiting for?      'click'
  //button.addEventListener("click");
//   3) What do we do when it happens? (callback)   completeTransaction



// Note: Both records must be visible
