// TypeScript: Implementing interface using interface
interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

// while implementing any interface we've to make sure all of its variable/ method declaration are being defined
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

// a class can implement more than one interface
class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    // Defining method which is being declare in Story interface
    createStory(): void {
        console.log("Story was created");
    }
}

export {};