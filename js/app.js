import { db } from "./firebase.js"; // Adjust the path if necessary
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

document.getElementById('applyForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;

  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    alert('Invalid name format. Please enter a valid first and last name using only alphabetic characters.');
    return;
  }

  email = email.toLowerCase();
  const emailRegex = /^[^\s@]+(\.[^\s@]+)*@[^\s@]+\.[^\s@]+(\.[^\s@]+)*$/;
  if(!emailRegex.test(email)){
    alert('Invalid Email. Try Again!');
    return;
  }

  phone = phone.replace(/\D/g, '');
  phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

  // Get the current date and time
  const now = new Date();
  const date = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const time = `${hours % 12 || 12}:${minutes} ${ampm}`;

  try {
    const docRef = await addDoc(collection(db, 'applicants'), {
      firstName,
      lastName,
      email,
      phone,
      date,
      time
    });
    console.log('Document ID: ', docRef.id);
    alert('Submission Successfull!');
  } catch (e) {
    console.error('Error Appending: ', e);
    alert('Submission Error. Try again!');
  }
});
