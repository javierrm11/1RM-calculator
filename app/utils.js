export function calculatorRm(peso, repeticiones) {
    return Math.round(peso / (1.0278 - 0.0278 * repeticiones));

}