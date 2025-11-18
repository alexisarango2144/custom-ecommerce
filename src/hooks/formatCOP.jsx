import { useState, useEffect } from "react";

export function formatCOP(ammount) {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0}).format(ammount)
}

