function or(exp1, exp2) {
	if (exp1 && exp2) return true;
	else if (exp1 && !exp2) return true;
	else if (exp2 && !exp1) return true;
	else return false;
}

console.log(or(false, true));
