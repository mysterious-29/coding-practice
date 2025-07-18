var compress = function(chars) {
    let oldChar = chars[0];
    let currChar;
    let count = 1;

    let index = 0;

    if(chars.length <= 1 ) {
        return 1;
    }

    for(let i=1; i < chars.length; i++) {
        currChar = chars[i];
        if(oldChar === currChar) {
            count += 1;
        } else {
            if(count===1) {
                chars[index++] = oldChar;
            } else {
                if(count > 1) {
                    let number = `${count}`;
                    chars[index++] = oldChar;
                    let counter = 0
                    while(counter < number.length) {
                        const c = number[counter]
                        chars[index++] = `${c}`;
                        counter += 1;
                    }
                }
            }
            oldChar = currChar;
            count = 1;
        }
    }

    chars[index++] = currChar;
    if(count > 1) {
        let number = `${count}`;
        let counter = 0
        while(counter < number.length) {
            const c = number[counter]
            chars[index++] = `${c}`;
            counter += 1;
        }
    }

    return index;
};