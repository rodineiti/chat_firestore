import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

interface PostId {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  
  nick: string = '';
  user: string = '';
  title:string;
  content:string;
  
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(
    private afs: AngularFirestore) {

  }

  ngOnInit () {    
    // caso queira fazer pesquisa por título: this.postsCol = this.afs.collection('posts', ref => ref.where('title','==','coursetro'));
    this.postsCol = this.afs.collection('posts', ref => ref.orderBy('createdAt'));
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data }
        })
      })    
  }

  addPost() {

    const createdAt = new Date();

    this.title = this.user;
    if (this.title !== '' && this.content !== ''){
      this.afs.collection('posts').add({'title': this.title, 'content': this.content, 'createdAt': createdAt });
      this.title = '';
      this.content = '';
    }
  }

  deletePost(postId) {
    this.afs.doc('posts/' + postId).delete();
  }

  entrar() {
    if(this.nick !== '') {
      this.user = this.nick;
    }
  }

}
