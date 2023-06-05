const commentNumber = 1552;

const formatter = new Intl.NumberFormat('ko-KR', { notation: 'compact' });
console.log('result', formatter.format(commentNumber));
