const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on google', async function () {
  await browser.url('https://www.google.com');
  await browser.maximizeWindow();
});

Then('I enter tictactoe game', async function () {
  await $('//*[@aria-label="Search"]').setValue('tic tac toe game');
  await browser.keys('Enter');
  await browser.pause(4000)
  let gameOver = false;
  const rows = 3; 
  const cols = 3;

  while (!gameOver) {
      let cellClicked = false;
      await browser.pause(1000);
      gameOver = await $('//span[text()="Game Over"]').isDisplayed();
      if(gameOver)
        break;


      while (!cellClicked) {
          const randomRow = Math.floor(Math.random() * rows);
          const randomCol = Math.floor(Math.random() * cols);

          const available= await $(`//*[@data-col='${randomRow}' and @data-row='${randomCol}']`).isClickable();
          if(available)
            {
              await $(`//*[@data-col='${randomRow}' and @data-row='${randomCol}']`).click();
              cellClicked=true;
            }
          }

        

     
      
  
  await browser.pause(1000)
      }
});

