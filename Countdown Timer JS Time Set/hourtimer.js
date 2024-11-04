export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

        this.el = {
            hours: root.querySelector(".timer__part--hours"),
            minutes: root.querySelector(".timer__part--minutes"),
            control: root.querySelector(".timer__btn--control"),
            reset: root.querySelector(".timer__btn--reset")
        };

        this.interval = null;
        this.remainingMinutes = 0;

        this.el.control.addEventListener('click', () => {
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        });

        this.el.reset.addEventListener('click', () => {
            const inputHours = prompt("Enter number of hours:");

            if (inputHours < 60) {
                this.stop();
                this.remainingMinutes = inputHours * 60;
                this.updateInterfaceTime();
            }

        });
    }

    updateInterfaceTime() {
        const hours = Math.floor(this.remainingMinutes / 60);
        const minutes = this.remainingMinutes % 60;

        this.el.hours.textContent = hours.toString().padStart(2, '0');
        this.el.minutes.textContent = minutes.toString().padStart(2, '0');
    }

    updateInterfaceControls() {
        if (this.interval === null) {
            this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
            this.el.control.classList.add("timer__btn--start");
            this.el.control.classList.remove("timer__btn--stop");
        } else {
            this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
            this.el.control.classList.add("timer__btn--stop");
            this.el.control.classList.remove("timer__btn--start");
        }
    }

    start() {
        if (this.remainingMinutes === 0) return;

        this.interval = setInterval(() => {
            this.remainingMinutes--;
            this.updateInterfaceTime();

            if (this.remainingMinutes === 0) {
                this.stop();
                alert("Timer Done")
            }
        }, 60000);

        this.updateInterfaceControls();
    }

    stop() {
        clearInterval(this.interval);

        this.interval = null;

        this.updateInterfaceControls();
    }

    static getHTML() {
        return `
            <span class="timer__part timer__part--hours">00</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--minutes">00</span>
            <button type="button" class="timer__btn timer__btn--control timer__btn--start">
                <span class="material-icons">play_arrow</span>
            </button>
            <button type="button" class="timer__btn timer__btn--reset">
                <span class="material-icons">timer</span>
            </button>
        `;
    }
}