import { test, expect } from '@playwright/test';

/*
test("Page loads",async ({page})=>{
    setTimeout(async ()=>{
        await page.goto('http://localhost:3000/jeuxvideops/js13k-2021/');
        const title = await page.getByRole('heading').innerText();
        page_loaded = title != undefined;
    //probably runs eval on page needs a promise. Can 'fetch' data from page
    const TESTING = await page.evaluate(()=>{
        return new Promise((resolve, reject) => {
            resolve(window.TESTING);    
        })
    });
//    console.log(TESTING);

    await page.getByTestId('canvas').click();

    await expect(page.getByRole('heading')).toBeVisible();
    },10000)
    
})
*/




test("Page loads",async ({page})=>{
    await page.goto('http://localhost:3000/');
    await expect(page.getByRole('heading')).toBeVisible();
})


test("Scripts are loaded",async ({page})=>{
    await page.goto('http://localhost:3000/');
    const script = await page.evaluate(()=> new Promise((resolve)=>{
        resolve(document.loaded);
    }));
    const is_loaded = script === true;
    expect(is_loaded).toBeTruthy();
})


test("Player can take damages", async({page})=>{
    await page.goto("http://localhost:3000/");
    const health_diff = await page.evaluate(()=>
        new Promise((resolve) => {
            let before = document.health;
            document.takeDamage();
            let after = document.health;
            resolve({before, after});
        })
    )
    expect(health_diff.after).toBeLessThan(health_diff.before);
})


 
//See if player damage enemies spawn bullet inside enemy see if it takes damage
//See if player can move check player pos simulate key press see if player moved
//See if killed enemies augment score check score getDamage(1000) on enemies check score