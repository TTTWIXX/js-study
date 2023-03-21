alert(`~~~~~~~재미있는 사칙연산 게임~~~~~~~`);
alert(`[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]
=====================================`);
alert(`/ 의 경우 몫을 구하세요`);
var level = +prompt(`~~~~~~~난이도를 설정합니다.~~~~~~~
[1.상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20)]`);


var cor = 0;
var incor = 0;
while (true) {
    if (level === 1) {
        var cal = Math.floor(Math.random() * 4 + 1);
        var firstNum = Math.floor(Math.random() * 100 + 1);
        var secondNum = Math.floor(Math.random() * 100 + 1);
        outcycle: if (cal === 1) {
            var answer = +prompt(`${firstNum}*${secondNum}= ??`);
            innercycle: if (answer === firstNum * secondNum) {
                alert('정답입니다.')
                cor++;
                break outcycle;
            } else if (answer !== firstNum * secondNum && answer !== 0) {
                alert('틀렸어요~')
                incor++;
                break outcycle;
            } else if (answer === 0) {
                alert(`게임을 종료합니다.!`);
                alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                break;
            }

        } else if (cal === 2) {
            var answer = +prompt(`${firstNum}+${secondNum}= ??`);
            innercycle: if (answer === firstNum + secondNum) {
                alert('정답입니다.')
                cor++;
                break outcycle;
            } else if (answer !== firstNum + secondNum && answer !== 0) {
                alert('틀렸어요~')
                incor++;
                break outcycle;
            } else if (answer === 0) {
                alert(`게임을 종료합니다.!`);
                alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                break;
            }

        } else if (cal === 3) {

            if (firstNum < secondNum) {
                var thirdNum;
                thirdNum = firstNum;
                firstNum = secondNum;
                secondNum = thirdNum;
                var answer = +prompt(`${firstNum}-${secondNum}= ??`);
                innercycle: if (answer === firstNum - secondNum) {
                    alert('정답입니다.')
                    cor++;
                    break outcycle;
                } else if (answer !== firstNum - secondNum && answer !== 0) {
                    alert('틀렸어요~')
                    incor++;
                    break outcycle;
                } else if (answer === 0) {
                    alert(`게임을 종료합니다.!`);
                    alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                    break;
                }

            } else if (firstNum > secondNum) {
                var answer = +prompt(`${firstNum}-${secondNum}= ??`);
                innercycle: if (answer === firstNum - secondNum) {
                    alert('정답입니다.')
                    cor++;
                    break outcycle;
                } else if (answer !== firstNum - secondNum && answer !== 0) {
                    alert('틀렸어요~')
                    incor++;
                    break outcycle;
                } else if (answer === 0) {
                    alert(`게임을 종료합니다.!`);
                    alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                    break;
                }

            } else if (firstNum === secondNum) {
                continue
            }


        } else if (cal === 4) {
            var answer = +prompt(`${firstNum}/${secondNum}= ??`);
            innercycle: if (answer === Math.floor(firstNum / secondNum)) {
                alert('정답입니다.')
                cor++;
                break outcycle;
            } else if (answer !== Math.floor(firstNum / secondNum) && answer !== 0) {
                alert('틀렸어요~')
                incor++;
                break outcycle;
            } else if (answer === 0) {
                alert(`게임을 종료합니다.!`);
                alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                break;
            }

        }
    }
    if (level === 2) {
        var cal = Math.floor(Math.random() * 4 + 1);
        var firstNum = Math.floor(Math.random() * 50 + 1);
        var secondNum = Math.floor(Math.random() * 50 + 1);
        outcycle: if (cal === 1) {
            var answer = +prompt(`${firstNum}*${secondNum}= ??`);
            innercycle: if (answer === firstNum * secondNum) {
                alert('정답입니다.')
                cor++;
                break outcycle;
            } else if (answer !== firstNum * secondNum && answer !== 0) {
                alert('틀렸어요~')
                incor++;
                break outcycle;
            } else if (answer === 0) {
                alert(`게임을 종료합니다.!`);
                alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                break;
            }

        } else if (cal === 2) {
            var answer = +prompt(`${firstNum}+${secondNum}= ??`);
            innercycle: if (answer === firstNum + secondNum) {
                alert('정답입니다.')
                cor++;
                break outcycle;
            } else if (answer !== firstNum + secondNum && answer !== 0) {
                alert('틀렸어요~')
                incor++;
                break outcycle;
            } else if (answer === 0) {
                alert(`게임을 종료합니다.!`);
                alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                break;
            }

        } else if (cal === 3) {

            if (firstNum < secondNum) {
                var thirdNum;
                thirdNum = firstNum;
                firstNum = secondNum;
                secondNum = thirdNum;
                var answer = +prompt(`${firstNum}-${secondNum}= ??`);
                innercycle: if (answer === firstNum - secondNum) {
                    alert('정답입니다.')
                    cor++;
                    break outcycle;
                } else if (answer !== firstNum - secondNum && answer !== 0) {
                    alert('틀렸어요~')
                    incor++;
                    break outcycle;
                } else if (answer === 0) {
                    alert(`게임을 종료합니다.!`);
                    alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                    break;
                }

            } else if (firstNum > secondNum) {
                var answer = +prompt(`${firstNum}-${secondNum}= ??`);
                innercycle: if (answer === firstNum - secondNum) {
                    alert('정답입니다.')
                    cor++;
                    break outcycle;
                } else if (answer !== firstNum - secondNum && answer !== 0) {
                    alert('틀렸어요~')
                    incor++;
                    break outcycle;
                } else if (answer === 0) {
                    alert(`게임을 종료합니다.!`);
                    alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                    break;
                }

            } else if (firstNum === secondNum) {
                continue;
            }


        } else if (cal === 4) {
            var answer = +prompt(`${firstNum}/${secondNum}= ??`);
            innercycle: if (answer === Math.floor(firstNum / secondNum)) {
                alert('정답입니다.')
                cor++;
                break outcycle;
            } else if (answer !== Math.floor(firstNum / secondNum) && answer !== 0) {
                alert('틀렸어요~')
                incor++;
                break outcycle;
            } else if (answer === 0) {
                alert(`게임을 종료합니다.!`);
                alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                break;
            }

        }

        if (level === 3) {
            var cal = Math.floor(Math.random() * 4 + 1);
            var firstNum = Math.floor(Math.random() * 20 + 1);
            var secondNum = Math.floor(Math.random() * 20 + 1);
            outcycle: if (cal === 1) {
                var answer = +prompt(`${firstNum}*${secondNum}= ??`);
                innercycle: if (answer === firstNum * secondNum) {
                    alert('정답입니다.')
                    cor++;
                    break outcycle;
                } else if (answer !== firstNum * secondNum && answer !== 0) {
                    alert('틀렸어요~')
                    incor++;
                    break outcycle;
                } else if (answer === 0) {
                    alert(`게임을 종료합니다.!`);
                    alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                    break;
                }

            } else if (cal === 2) {
                var answer = +prompt(`${firstNum}+${secondNum}= ??`);
                innercycle: if (answer === firstNum + secondNum) {
                    alert('정답입니다.')
                    cor++;
                    break outcycle;
                } else if (answer !== firstNum + secondNum && answer !== 0) {
                    alert('틀렸어요~')
                    incor++;
                    break outcycle;
                } else if (answer === 0) {
                    alert(`게임을 종료합니다.!`);
                    alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                    break;
                }

            } else if (cal === 3) {

                if (firstNum < secondNum) {
                    var thirdNum;
                    thirdNum = firstNum;
                    firstNum = secondNum;
                    secondNum = thirdNum;
                    var answer = +prompt(`${firstNum}-${secondNum}= ??`);
                    innercycle: if (answer === firstNum - secondNum) {
                        alert('정답입니다.')
                        cor++;
                        break outcycle;
                    } else if (answer !== firstNum - secondNum && answer !== 0) {
                        alert('틀렸어요~')
                        incor++;
                        break outcycle;
                    } else if (answer === 0) {
                        alert(`게임을 종료합니다.!`);
                        alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                        break;
                    }

                } else if (firstNum > secondNum) {
                    var answer = +prompt(`${firstNum}-${secondNum}= ??`);
                    innercycle: if (answer === firstNum - secondNum) {
                        alert('정답입니다.')
                        cor++;
                        break outcycle;
                    } else if (answer !== firstNum - secondNum && answer !== 0) {
                        alert('틀렸어요~')
                        incor++;
                        break outcycle;
                    } else if (answer === 0) {
                        alert(`게임을 종료합니다.!`);
                        alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                        break;
                    }

                } else if (firstNum === secondNum) {
                    continue;
                }

            } else if (cal === 4) {
                var answer = +prompt(`${firstNum}/${secondNum}= ??`);
                innercycle: if (answer === Math.floor(firstNum / secondNum)) {
                    alert('정답입니다.')
                    cor++;
                    break outcycle;
                } else if (answer !== Math.floor(firstNum / secondNum) && answer !== 0) {
                    alert('틀렸어요~')
                    incor++;
                    break outcycle;
                } else if (answer === 0) {
                    alert(`게임을 종료합니다.!`);
                    alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incor}회`)
                    break;
                }

            }
        
        }
    }
}

        // ===================================================================================
        // else if (cal === 4) {
        //     var answer = +prompt(`${firstNum}/${secondNum}= ??`);
        //     innercycle: if (answer === Math.floor(firstNum / secondNum)) {
        //         alert('정답입니다.')
        //         cor++;
        //         break outcycle;
        //     } else if (answer !== Math.floor(firstNum / secondNum) && answer !== 0) {
        //         alert('틀렸어요~')
        //         incorr++;
        //         break outcycle;
        //     } else if (answer === 0) {
        //         alert(`게임을 종료합니다.!`);
        //         alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incorr}회`)
        //         break;
        //     }



        // }