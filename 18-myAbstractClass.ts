// TypeScript Abstract Class: whose object can't be created only its extended class object can be created

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    
    // abstract method using 'abstract' keyword inside abstract class
    abstract getSepia(): void

    // Apart from declaring we can define method as well inside abstract class
    getReelTime(): number{
        //some complex calculation
        return 8;
    }
}

// class extending abstract class
class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter);  // Imp: calling abstract class constructor in first line
        }

        // defining abstract method
        getSepia(): void {
            console.log("Sepia");
        }
}

const hc = new Instagram("test", "Test", 3)
hc.getReelTime();   // extending class object accessing method define inside abstract class

export {};