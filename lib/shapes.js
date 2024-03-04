class Shape {
    constructor(data, text) {
        this.data = data;
        this.text = text;
    }

    setColor(data) {
        this.data = data;
    }

    render() {
        return '';
    };
}


class Triangle extends Shape {
    constructor(data, shape, text) {
        super(data, text);
        this.shape = shape;
    }

    render() {
        if (this.shape === 'Triangle') {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <polygon points="100,10 150,190 50,190" style="fill:${this.data};stroke:black;stroke-width:1" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="fill:${this.text.color};font-size:24px;">${this.text.content}</text>
        </svg>`;
        }
    }
}

class Circle extends Shape {
    constructor(data, shape, text) {
        super(data, text);
        this.shape = shape;
    }

    render() {
        if (this.shape === 'Circle') {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <circle cx="100" cy="100" r="80" style="fill:${this.data}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="fill:${this.text.color};font-size:24px;">${this.text.content}</text>
        </svg>`;

        }
    }
}

class Square extends Shape {
    constructor(data, shape, text) {
        super(data, text);
        this.shape = shape;
    }

    render() {
        if (this.shape === 'Square') {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <rect x="50" y="50" width="100" height="100" style="fill:${this.data};stroke:black;stroke-width:1" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="fill:${this.text.color};font-size:24px;">${this.text.content}</text>
        </svg>`;
        }
    }
}

export { Shape, Triangle, Circle, Square };