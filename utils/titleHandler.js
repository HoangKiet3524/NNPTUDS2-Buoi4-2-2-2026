module.exports = {
    ConvertTitleToSlug: function (title) {
        let result = title.toLowerCase();
        
        // Chuyển đổi ký tự có dấu tiếng Việt
        result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        result = result.replace(/đ/g, 'd').replace(/Đ/g, 'D');
        
        // Thay thế các ký tự đặc biệt bằng dấu gạch ngang
        result = result.replace(/[^a-z0-9\s-]/g, '');
        
        // Thay thế khoảng trắng bằng dấu gạch ngang
        result = result.replace(/\s+/g, '-');
        
        // Loại bỏ dấu gạch ngang liên tiếp
        result = result.replace(/-+/g, '-');
        
        // Loại bỏ dấu gạch ngang ở đầu và cuối
        result = result.replace(/^-+|-+$/g, '');
        
        return result;
    }
}
