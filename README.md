-- ✅ Create Database
CREATE DATABASE IF NOT EXISTS cars;
USE cars;

-- ✅ Drop old table if exists
DROP TABLE IF EXISTS rent;

-- ✅ Create Rent Table
CREATE TABLE rent (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(100) NOT NULL,
  car_name VARCHAR(100) NOT NULL,
  car_model VARCHAR(50) NOT NULL,
  rent_per_day DECIMAL(10,2) NOT NULL,
  total_days INT NOT NULL,
  total_amount DECIMAL(10,2) GENERATED ALWAYS AS (rent_per_day * total_days) STORED,
  city VARCHAR(100),
  phone VARCHAR(30),
  image VARCHAR(255), -- store image path (e.g. /uploads/car123.webp)
  rent_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ✅ Insert Sample Data
INSERT INTO rent (customer_name, car_name, car_model, rent_per_day, total_days, city, phone, image) VALUES
('Tayyab', 'Toyota Corolla', '2020', 5500, 3, 'Karachi', '03001234567', '/uploads/car1.webp'),
('Arsalan', 'Honda Civic', '2022', 6500, 2, 'Lahore', '03214567890', '/uploads/car2.webp'),
('Junaid', 'Suzuki Alto', '2019', 3000, 5, 'Islamabad', '03339874521', '/uploads/car3.webp'),
('Aftab', 'Kia Sportage', '2023', 8500, 1, 'Hyderabad', '03451234567', '/uploads/car4.webp'),
('Hina Malik', 'Toyota Yaris', '2021', 5000, 4, 'Rawalpindi', '03124567891', '/uploads/car5.webp'),
('Asif', 'Honda City', '2020', 5500, 3, 'Multan', '03561234567', '/uploads/car6.webp');


SELECT * FROM rent;