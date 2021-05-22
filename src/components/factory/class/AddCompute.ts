import AbsCompute from "../abstract/AbsCompute";

export default class AddCompute extends AbsCompute {
    Calc(number1: number, number2: number): number {
        return number1 + number2;
    }
}