const db = require("../models");
const { Course, UserCourse } = db;

// Create Course
exports.createCourse = async (req, res) => {
  const { title, description, category, duration, company_id } = req.body;

  try {
    const course = await Course.create({
      title,
      description,
      category,
      duration,
      company_id,
    });

    res.status(201).json({ message: "Course created", course });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

// Get All Courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      order: [["id", "DESC"]],
    });
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

// Update Course
exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, category, duration, status } = req.body;

  try {
    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    course.title = title || course.title;
    course.description = description || course.description;
    course.category = category || course.category;
    course.duration = duration || course.duration;
    course.status = status !== undefined ? status : course.status;

    await course.save();

    res.status(200).json({ message: "Course updated", course });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

// Delete Course
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    await course.destroy();
    res.status(200).json({ message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

// Get Courses by Company
exports.getCoursesByCompany = async (req, res) => {
  const { companyId } = req.params;

  try {
    const courses = await Course.findAll({
      where: { company_id: companyId },
      order: [["id", "DESC"]],
    });

    res.status(200).json({ courses });
  } catch (error) {
    console.error("Error fetching courses by company:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Assign Course to User
exports.assignCourseToUser = async (req, res) => {
  const { courseId, userId } = req.body;

  try {
    const userCourse = await UserCourse.create({
      courseId,
      userId,
    });

    res.status(201).json({ message: "Course assigned to user", userCourse });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

// Update User Course Progress
exports.updateUserCourseProgress = async (req, res) => {
  let { userId, courseId, progress } = req.body;

  try {
    if (!userId || typeof userId !== "string" || userId.trim().length !== 24) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    const parsedCourseId = parseInt(courseId, 10);
    const parsedProgress = parseInt(progress, 10);

    if (isNaN(parsedCourseId)) {
      return res.status(400).json({ message: "Invalid courseId" });
    }

    if (isNaN(parsedProgress) || parsedProgress < 0 || parsedProgress > 100) {
      return res.status(400).json({ message: "Progress must be a number between 0 and 100" });
    }

    const [updatedRows] = await UserCourse.update(
      { progress: parsedProgress },
      { where: { userId: userId.trim(), courseId: parsedCourseId } }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: "User course record not found" });
    }

    res.status(200).json({ message: "Course progress updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

// Mark Course as Completed
exports.markCourseAsCompleted = async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    if (!userId || typeof userId !== "string" || userId.trim().length !== 24) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    const parsedCourseId = parseInt(courseId, 10);

    if (isNaN(parsedCourseId)) {
      return res.status(400).json({ message: "Invalid courseId" });
    }

    const userCourse = await UserCourse.findOne({
      where: { userId: userId.trim(), courseId: parsedCourseId },
    });

    if (!userCourse) {
      return res.status(404).json({ message: "User course record not found" });
    }

    userCourse.completed = true;
    await userCourse.save();

    res.status(200).json({ message: "Course marked as completed", userCourse });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};
