

function addBelumBaca() {
  const namaJudul = document.getElementById("inputBookTitle").value;
  const namaPenulis = document.getElementById("inputBookAuthor").value;
  const tahunTerbit = document.getElementById("inputBookYear").value;
  const checkSelesai = document.getElementById("inputBookIsComplete").checked;

  const generatedID = generateID();
  const objectBuku = generateObjectBuku(
    generatedID,
    namaJudul,
    namaPenulis,
    parseInt(tahunTerbit),
    checkSelesai
  );
  incompleteBookshelfList.push(objectBuku);

  document.dispatchEvent(new Event(RENDER_EVENT));
  simpanData();
}

function generateID() {
  return +new Date();
}



  for (const itemArrayBelumBaca of incompleteBookshelfList) {
    const elemenArrayBelumBaca = tambahbelumSelesaiBaca(itemArrayBelumBaca);
    if (!itemArrayBelumBaca.isCompleted) {
      uncompletedBookList.append(elemenArrayBelumBaca);
    } else {
      completedBookList.append(elemenArrayBelumBaca);
    }
  }
});

function tambahbelumSelesaiBaca(objectBuku) {
  const textJudul = document.createElement("h2");
  textJudul.innerText = objectBuku.judul;

  const textPenulis = document.createElement("p");
  textPenulis.innerText = objectBuku.penulis;

  const textTahun = document.createElement("p");
  textTahun.innerText = objectBuku.tahun;

  const isiboxBelumBaca = document.createElement("article");
  isiboxBelumBaca.classList.add("book_item");
  isiboxBelumBaca.append(textJudul, textPenulis, textTahun);

  const boxBelumBaca = document.createElement("div");
  boxBelumBaca.classList.add("action");
  boxBelumBaca.append(isiboxBelumBaca);
  boxBelumBaca.setAttribute("id", "BelumBaca-${objectBuku.id}");

  if (objectBuku.isCompleted) {
    const notdoneButton = document.createElement("button");
    notdoneButton.classList.add("done-button");
    notdoneButton.innerHTML = "Belum Selesai";

    notdoneButton.addEventListener("click", function () {
      notdoneFromCompleted(objectBuku.id);
    });

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = "Hapus Buku";

    removeButton.addEventListener("click", function () {
      if (window.confirm("Yakin Untuk menghapus data ini?")) {
        removeFromList(objectBuku.id);
        return true;
      }
    });

    boxBelumBaca.append(notdoneButton, removeButton);
  } else {
    const doneButton = document.createElement("button");
    doneButton.classList.add("not-done-button");
    doneButton.innerHTML = "Selesai";

    doneButton.addEventListener("click", function () {
      doneFromUncompleted(objectBuku.id);
    });

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = "Hapus Buku";

    removeButton.addEventListener("click", function () {
      if (window.confirm("Yakin Untuk menghapus data ini?")) {
        removeFromList(objectBuku.id);
        return true;
      }
    });

    boxBelumBaca.append(doneButton, removeButton);
  }

  return boxBelumBaca;
}

function moveBukuToCompleted(BookId) {
  const TargetBuku = findIndex(BookId);

  if (TargetBuku == null) return;

  TargetBuku.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  simpanData();
}

function findIndex(BookId) {
  for (const itemArrayBelumBaca of incompleteBookshelfList) {
    if (itemArrayBelumBaca.id === BookId) {
      return itemArrayBelumBaca;
    }
  }
  return null;
}

function removeFromList(BookId) {
  const TargetBuku = findIndex(BookId);

  if (TargetBuku === -1) return;

  incompleteBookshelfList.splice(TargetBuku, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  simpanData();
}

function notdoneFromCompleted(BookId) {
  const TargetBuku = findIndex(BookId);

  if (TargetBuku == null) return;
  TargetBuku.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  simpanData();
}

function doneFromUncompleted(BookId) {
  const TargetBuku = findIndex(BookId);

  if (TargetBuku == null) return;

  TargetBuku.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  simpanData();
}

function findIndexBelum(BookId) {
  for (const index in incompleteBookshelfList) {
    if (incompleteBookshelfList[index].id === BookId) {
      return index;
    }
  }
  return -1;
}

const STORAGE_BOOK = "saved-book";
const SAVED_EVENT = "STORAGE_EVENTS";

function simpanData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(incompleteBookshelfList);
    localStorage.setItem(STORAGE_BOOK, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function isStorageExist() {
  if (typeof Storage === undefined) {
    alert("Browser anda tidak dapat menjalankan local storage");
    return false;
  }
  return true;
}

document.addEventListener(SAVED_EVENT, function () {
  console.log(localStorage.getItem(STORAGE_BOOK));
});

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_BOOK);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const completeBookshelfList of data) {
      incompleteBookshelfList.push(completeBookshelfList);
    }
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("inputBook");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBelumBaca();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

const cariBuku = document.getElementById('searchSubmit');
cariBuku.addEventListener('click',function(event){
  event.preventDefault();
  cariDataBuku();
});

function cariDataBuku(){
  const searchTitleBook = document.getElementById("searchBookTitle").value.toLowerCase();
  const searchListBook = document.querySelectorAll('.book_item > h2');
  if(searchTitleBook != ''){
    for(const data of searchListBook){
      if(data.innerText.toLowerCase().includes(searchTitleBook)){
        console.log('Data buku berhasil ditemukan');
        data.parentElement.style.display = "block";
      }else{
        console.log('Data buku tidak ditemukan');
        data.parentElement.style.display = "none";
      }
    }
  }else{
    console.log('Silahkan ketikan nama untuk mencari');
  }
}

;