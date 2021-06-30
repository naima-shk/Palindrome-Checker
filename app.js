function isPalin(){
    let str = document.getElementById('a').value;
    document.getElementById('b').value=str + ` is ${str != str.split('').reverse().join('') ? 'not ' : ''}a palindrome`;
}
