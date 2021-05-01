const express = require('express');
const router = express.Router();
const Post = require('../services/post');


// get all docs
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({ message: err });
   }
});
  
// get specific doc
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

// post the doc
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.header,
        number: req.body.number,
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

// delete the doc
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost =await Post.deleteOne({ _id: req.params.postId })
res.json(removedPost)
    } catch (err) {
        res.json({ message: err });
    }
});

// update the Docs
router.put('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    title: req.body.title,
                    number: req.body.number,
                    email: req.body.email,
                    username: req.body.username,
                }
            });
            
        res.json(updatedPost);
    } catch(err){
        res.json({ message: err });
    }
})




    


module.exports = router;
