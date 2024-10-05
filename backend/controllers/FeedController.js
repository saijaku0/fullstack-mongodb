import FeedSchema from "../models/Feed.js";

export const createFeed = async (req, res) => {
  try {
    const doc = new FeedSchema({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      user: req.userId,
    });

    const createFeed = await doc.save();

    res.json(createFeed);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Cannot create new feed",
    });
  }
};

export const updateFeed = async (req, res) => {
  try {
    const feedId = req.params.id;

    const tags = Array.isArray(req.body.tags)
      ? req.body.tags
      : req.body.tags.split(",");

    await FeedSchema.updateOne(
      {
        _id: feedId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        user: req.userId,
        tags: tags,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Cannot find feeds",
    });
  }
};

export const getAllFeeds = async (req, res) => {
  try {
    const feeds = await FeedSchema.find().populate("user").exec();

    res.json(feeds);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Cannot find feeds",
    });
  }
};

export const getOneFeed = async (req, res) => {
  try {
    const feedId = req.params.id;

    const doc = await FeedSchema.findByIdAndUpdate(
      {
        _id: feedId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        new: "true",
      }
    );

    if (!doc) {
      return res.status(404).json({
        message: "Feed doesn`t exist. ",
      });
    }

    res.json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Cannot find feeds.",
    });
  }
};

export const removeFeed = async (req, res) => {
  try {
    const feedId = req.params.id;

    const doc = await FeedSchema.findOneAndDelete({ _id: feedId });

    if (!doc) {
      return res.status(404).json({
        message: "Feed doesn`t exist. ",
      });
    }

    res.json({
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Cannot find feeds.",
    });
  }
};
