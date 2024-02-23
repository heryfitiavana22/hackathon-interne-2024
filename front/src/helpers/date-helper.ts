import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

export class DateHelper {
    static format(date: DateInput, template = "DD/MM/YYYY") {
        return dayjs(date).format(template);
    }

    static tomorrow(date: DateInput) {
        return dayjs(date).add(1, "day").toDate();
    }

    static isNowBefore(dateInput: DateInput) {
        const now = dayjs();
        return now.isBefore(dateInput);
    }

    static isNowAfter(dateInput: DateInput) {
        const now = dayjs();
        return now.isAfter(dateInput);
    }

    static isNowBetween(start: DateInput, end: DateInput) {
        const now = dayjs();
        const startDate = dayjs(start);
        const endDate = dayjs(end);
        // console.log(now.format("DD/MM/YYYY"), startDate.format("DD/MM/YYYY"), endDate.format("DD/MM/YYYY"));

        if (startDate.isSame(now, "date") || endDate.isSame(now, "date"))
            return true;
        return now.isBetween(start, end, "date");
    }

    static diff(start: DateInput, end: DateInput) {
        const endDate = dayjs(end);
        return endDate.diff(start, "day") + 1;
    }

    static isSame(date1: DateInput, date2: DateInput) {
        return dayjs(date1).isSame(date2, "date");
    }
}

export type DateInput = string | Date | number;
