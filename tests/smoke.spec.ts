import {test,expect} from '@playwright/test'
for(const width of [320,390,820,1440]){
 test(`navigation and layout at ${width}px`,async({page})=>{
  await page.setViewportSize({width,height:900});await page.goto('/');
  await expect(page.getByRole('heading',{name:'Shubham Pawar',exact:true})).toBeVisible();
  await page.getByRole('link',{name:'See my work'}).click();
  await expect(page.getByRole('heading',{name:'Latest apps I have built'})).toBeVisible();
  await expect(page.locator('#work article')).toHaveCount(3);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
  if(width<768)await expect(page.locator('canvas')).toHaveCount(0);
 })
}
test('reduced motion uses a static scene',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 await expect(page.locator('.static-scene')).toBeVisible();await expect(page.locator('canvas')).toHaveCount(0);
})
