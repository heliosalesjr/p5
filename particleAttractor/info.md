Particle Attractor

To change the distance and velocity of the particles, you can modify the Particle class's constructor. Specifically, you can change the initial values of this.vel and this.acc to set the initial velocity and acceleration of the particles, and you can change the value of distance in the Attractor class's calculateAttraction() method to adjust the range at which the particles are affected by the attractor.

For example, to increase the initial velocity of the particles, you could change the line in the Particle constructor that sets this.vel to something like this:

javascript


this.vel = createVector(random(-5, 5), random(-5, 5));

This sets the initial velocity of each particle to a random vector with components between -5 and 5.

To increase the distance at which the particles are affected by the attractor, you could change the constrain() function in the Attractor class's calculateAttraction() method. For example, you could change the line:

distance = constrain(distance, 5, 25);

to something like:

distance = constrain(distance, 5, 50);

This would increase the range of distances over which the attraction force is applied to each particle, resulting in larger and more spread-out orbits. You can experiment with different values to get the desired effect.
