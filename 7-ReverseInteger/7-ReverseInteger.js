String reversed = new StringBuilder().append(Math.abs(x)).reverse().toString();
try {
    return (x < 0) ? Integer.parseInt(reversed) * -1 : Integer.parseInt(reversed);
} catch (NumberFormatException e) {
    return 0;
}