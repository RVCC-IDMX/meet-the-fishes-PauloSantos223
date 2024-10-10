var UI = {
    Button: function(x, y, text, params) {
        // Default Parameters
        if (params === undefined) {
            params = {};
        }
        if (params.backgroundColor === undefined) {
            params.backgroundColor = 0xEEEEEE;
        }
        if (params.textStyle === undefined) {
            params.textStyle = {
                fontFamily: 'Arial',
                fontSize: 24,
                fill: 0x000000,
            };
        }

        // Create button container
        var ourButton = new PIXI.Container();
        ourButton.interactive = true;
        ourButton.x = x;
        ourButton.y = y;

        // Button body with rounded corners
        var buttonBody = new PIXI.Graphics();
        buttonBody.beginFill(params.backgroundColor);
        buttonBody.drawRoundedRect(0, 0, 200, 100, 15);
        buttonBody.endFill();
        ourButton.addChild(buttonBody);

        // Shadow effect
        var shadow = new PIXI.Graphics();
        shadow.beginFill(0x000000, 0.5); 
        shadow.drawRoundedRect(5, 5, 200, 100, 15);
        shadow.endFill();
        ourButton.addChild(shadow); 

        // Button text
        var buttonText = new PIXI.Text(text, params.textStyle);
        buttonText.anchor.set(0.5, 0.5);
        buttonText.x = 100; 
        buttonText.y = 50; 
        ourButton.addChild(buttonText);

        // Hover effects
        ourButton.on("pointerover", () => {
            buttonBody.clear(); 
            buttonBody.beginFill(0x34bf80); 
            buttonBody.drawRoundedRect(0, 0, 200, 100, 15);
            buttonBody.endFill();
        });

        ourButton.on("pointerout", () => {
            buttonBody.clear(); 
            buttonBody.beginFill(params.backgroundColor); 
            buttonBody.drawRoundedRect(0, 0, 200, 100, 15);
            buttonBody.endFill();
        });

        // Click effects
        ourButton.on("pointerdown", () => {
            gsap.to(ourButton.scale, { x: 0.95, y: 0.95, duration: 0.1 }); // Slight shrink effect
        });

        ourButton.on("pointerup", () => {
            gsap.to(ourButton.scale, { x: 1, y: 1, duration: 0.1 }); // Return to original size
        });

        return ourButton;
    },
};
