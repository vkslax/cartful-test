# Problem 2 - Javascript

### Notes
- In order to add the node to render the offer texts, it was used a class selector
since seems to be a static class, although it is not a good practice and id is preferred
- Same as above, the class selector was used to get the quantity of the product for the same reasons
but should be changed to an id selector when possible.
- An array of sizes that applies to the offer is created in order to allow the
  configuration of products that applies only by changing this array. This reduces changes in code if the offer changes.