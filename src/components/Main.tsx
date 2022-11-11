

import './main.css';

export function Main() {


	let count = 0;
	let drawcount = 0;
	let setka = Array(10);



	function Start(e: any) {

		if (e.target.textContent == "") {

			count++

			if (count % 2) {
				e.target.textContent = 'O'
			} else {
				e.target.textContent = 'X'
			}
			setTimeout(() => SetWin(e), 200)


		} else {
			alert('Эта ячейка уже зянята')
		}

	}


	function SetWin(e: any) {
		setka[+e.target.id] = e.target.textContent
		if (setka[1] == 'X' && setka[2] == 'X' && setka[3] == 'X' || setka[1] == 'X' && setka[4] == 'X' && setka[7] == 'X' || setka[3] == 'X' && setka[6] == 'X' && setka[9] == 'X' || setka[4] == 'X' && setka[5] == 'X' && setka[6] == 'X' || setka[7] == 'X' && setka[8] == 'X' && setka[9] == 'X' || setka[2] == 'X' && setka[5] == 'X' && setka[8] == 'X' || setka[1] == 'X' && setka[5] == 'X' && setka[9] == 'X' || setka[3] == 'X' && setka[5] == 'X' && setka[7] == 'X') {
			alert('победа Х')

			window.location.reload();

		} else if (setka[1] == 'O' && setka[2] == 'O' && setka[3] == 'O' || setka[1] == 'O' && setka[4] == 'O' && setka[7] == 'O' || setka[3] == 'O' && setka[6] == 'O' && setka[9] == 'O' || setka[4] == 'O' && setka[5] == 'O' && setka[6] == 'O' || setka[7] == 'O' && setka[8] == 'O' && setka[9] == 'O' || setka[2] == 'O' && setka[5] == 'O' && setka[8] == 'O' || setka[1] == 'O' && setka[5] == 'O' && setka[9] == 'O' || setka[3] == 'O' && setka[5] == 'O' && setka[7] == 'O') {
			alert('победа O')

			window.location.reload();

		} else {

			setka.forEach(e => {
				if (e == 'X' || e == 'O') {
					drawcount++
				}
				return drawcount
			})
			if (drawcount == 45) {
				alert('ничья')

				window.location.reload();

			}

		}


	}


	return (

		<div id="game">
			<div className="table">
				<table >
					<tr>
						<td>
							<div onClick={(e) => Start(e)} className="inner" id="1"></div>
						</td>
						<td>
							<div onClick={(e) => Start(e)} className="inner" id="2"></div>
						</td>
						<td>
							<div onClick={(e) => Start(e)} className="inner" id="3"></div>
						</td>
					</tr>
					<tr>
						<td>
							<div onClick={(e) => Start(e)} className="inner" id="4"></div>
						</td>
						<td>
							<div onClick={(e) => Start(e)} className="inner" id="5"></div>
						</td>
						<td>
							<div onClick={(e) => Start(e)} className="inner" id="6"></div>
						</td>
					</tr>
					<tr>
						<td>
							<div onClick={(e) => Start(e)} className="inner" id="7"></div>
						</td>
						<td>
							<div onClick={(e) => Start(e)} className="inner" id="8"></div>
						</td>
						<td>
							<div onClick={(e) => Start(e)} className="inner" id="9"></div>
						</td>
					</tr>
				</table>
			</div>
		</div>
	)
}