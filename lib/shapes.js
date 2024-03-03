class Shape {
    constructor(data) {
        this.data = data;
    }

    setColor(data) {
        this.data = data;
    }

    render() {
        return '';
    };
}

export default Shape;

class Triangle extends Shape {
    constructor(data) {
        super(data);
    }

    render() {
        return `<polygon points = "150, 18 244, 182 56, 182" fill="${this.data}" />`;
    }
}

class Circle extends Shape {
    constructor(data) {
        super(data);
        this.shape = shape;
    }

    render() {

        return `<circle cx="100" cy="100" r="80" fill="${this.data}" />`;

    }
}

class Square extends Shape {
    constructor(data) {
        super(data);
    }

    render() {

        return `<rect x="20" y="20" width="150" height="150" fill="${this.data}" />`;

    }
}

