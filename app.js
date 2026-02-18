const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Success!"), 1000);
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();
