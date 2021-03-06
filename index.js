var Colors = {
	red         :0xf25346,
	white       :0xd8d0d1,
	brown       :0x59332e,
	pink        :0xF5986E,
	brownDark   :0x23190f,
	blue        :0x68c3c0,
};


window.addEventListener('load', init, false);

function init() {

	// set up the scene, the camera and the renderer
	createScene();

	// add the lights
	createLights();

	// add the objects
	createPlane();
	createSea();
    createSky();
    
    //add the listener
	document.addEventListener('mousemove', handleMouseMove, false);

    // simple render without loop
    // renderer.render(scene, camera);
    
	// start a loop that will update the objects' positions 
	// and render the scene on each frame
    loop();
    
}
