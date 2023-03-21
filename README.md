# FAC-Soon_Challenge
This repo is a challenge for SOON_ apprenticeship. We had to replicate a product details page and a simple user flow to add products to a shopping basket. 

## Challenge 1
### Basket App User Flow

- As a user I want to be able to view a product with details: title, description, image, price
- As a user, I want to be able to add a quantity of the product to the basket and see the total item count in the basket from the header

#### Approach 
I tried to approach this with simplicity and focused a lot on making sure I was using the CSS from Figma. 
I didn't touch any functionality until this was done and felt it was at a place where I could move forward. 

My approach to the javascript was to create 3 functions: one to add, one to minus, and one that would add that quantity to the shopping basket. 

Towards the end I changed my approach and made the product into an object. I did this because I assume that this is the format retailers would use to store data - or at least this is the format we would change that information into to be able to display their products across the website. I didn't do this with the Img but I think in future the object would hold the image of the product 

#### Challenges
- Adapting the CSS and 'stacking' flexboxes. 
- lots of trial and error with the above

#### features left out for next time
- changing the colour of the shopping basket once something was added 
- using local storage to recall basket items
- change the stock amount once item is added to basket (or adjust down as user increases quantity)

#### Wins
- I loved working on the functions. They probably took me the least amount of time to do but still need a bit of testing.
- it was fun sifting through figma and trying to map out how I was going to structure the CSS - thought I think I should have spent more time on making this leaner with stacks and the flexboxes specifically. 

### How to view 
This page isn't published to github pages - please Clone this repo to view
```Terminal 
git clone https://github.com/cameochoquer/FAC-Soon_Challenge
```