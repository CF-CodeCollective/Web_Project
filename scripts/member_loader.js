const canvasAPI_URL = "https://cf.instructure.com/api/v1"

const members = [
{
	name: "Erik Peterson",
	desc: "President of the Code Collective.",
	img: "assets/members/erikp.jpg"
	//img: "https://cf.instructure.com/files/150919728/download?download_frd=1&verifier=DVfaWNNmYT6DNHsPiYMIc6ru30inO80xs52ceZcG"
},
{
	name: "John Business",
	desc: "Does business.",
	img: "https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg"
}
]

document.body.onload = load;

function load() {
	const members_list = document.getElementsByClassName("member_list")[0];
	
	for (let i = 0; i < members.length; i++) {
		const memberDiv = document.createElement("div");
		memberDiv.classList.add("member");
		
		const img = document.createElement("img");
		img.src = members[i].img;
		img.classList.add("member_img");
		memberDiv.appendChild(img);
		
		const infoDiv = document.createElement("div");
		infoDiv.classList.add("member_info");
		memberDiv.appendChild(infoDiv);
		
		const name = document.createElement("h3");
		name.innerHTML = members[i].name;
		name.classList.add("member_name");
		infoDiv.appendChild(name);
		
		const desc = document.createElement("p");
		desc.innerHTML = members[i].desc;
		desc.classList.add("member_desc");
		infoDiv.appendChild(desc);
		
		members_list.appendChild(memberDiv);
	}
}
